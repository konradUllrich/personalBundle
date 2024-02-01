import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCMENUAttributes {
    STRGUID: string;
    STRPARENTGUID?: string;
    LORDER: number;
    STRTYPE: string;
}

@Table({
	tableName: "LCMENU",
	timestamps: false 
})
export class LCMENU extends Model<LCMENUAttributes, LCMENUAttributes> implements LCMENUAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRPARENTGUID?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	LORDER!: number;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRTYPE!: string;

}