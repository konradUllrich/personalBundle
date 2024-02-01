import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPREFPARAMAttributes {
    STRGUID: string;
    STRREFGUID: string;
    STRDATAFIELD: string;
    STRTYPE: string;
    STRVALUE?: string;
}

@Table({
	tableName: "LCAPPREFPARAM",
	timestamps: false 
})
export class LCAPPREFPARAM extends Model<LCAPPREFPARAMAttributes, LCAPPREFPARAMAttributes> implements LCAPPREFPARAMAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRREFGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRDATAFIELD!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRTYPE!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRVALUE?: string;

}