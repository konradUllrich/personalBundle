import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPPROPSAttributes {
    STRAPPGUID: string;
    STRNAME: string;
    TXTVALUE?: string;
}

@Table({
	tableName: "LCAPPPROPS",
	timestamps: false 
})
export class LCAPPPROPS extends Model<LCAPPPROPSAttributes, LCAPPPROPSAttributes> implements LCAPPPROPSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPGUID!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRNAME!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTVALUE?: string;

}