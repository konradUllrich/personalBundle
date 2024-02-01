import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCPROFILEAttributes {
    GUIDUSER: string;
    STRNAME: string;
    INTTYPEID: number;
    INTVERSION: number;
    TXTVALUE?: string;
}

@Table({
	tableName: "LCPROFILE",
	timestamps: false 
})
export class LCPROFILE extends Model<LCPROFILEAttributes, LCPROFILEAttributes> implements LCPROFILEAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	GUIDUSER!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRNAME!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	INTTYPEID!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	INTVERSION!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTVALUE?: string;

}