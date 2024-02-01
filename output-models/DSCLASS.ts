import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSCLASSAttributes {
    LID: number;
    STRGUID: string;
    STRNAME: string;
    STRTABLENAME: string;
    LBASECLASSID?: number;
    LORDER: number;
    BMANDATORY: boolean;
}

@Table({
	tableName: "DSCLASS",
	timestamps: false 
})
export class DSCLASS extends Model<DSCLASSAttributes, DSCLASSAttributes> implements DSCLASSAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(50) 
    })
    	STRNAME!: string;

    @Column({
    	type: DataType.STRING(26) 
    })
    	STRTABLENAME!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LBASECLASSID?: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	LORDER!: number;

    @Column({
    	type: DataType.STRING 
    })
    	BMANDATORY!: boolean;

}