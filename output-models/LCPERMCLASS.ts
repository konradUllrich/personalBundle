import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCPERMCLASSAttributes {
    LID: number;
    STRCLASSNAME: string;
}

@Table({
	tableName: "LCPERMCLASS",
	timestamps: false 
})
export class LCPERMCLASS extends Model<LCPERMCLASSAttributes, LCPERMCLASSAttributes> implements LCPERMCLASSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRCLASSNAME!: string;

}