import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_T_PERSSETTINGS_ARTAttributes {
    REF_BUCHUNGSART?: string;
    DTINSERT?: Date;
    LID: number;
    FKSTRID?: string;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    LUSERID?: number;
}

@Table({
	tableName: "ZE_T_PERSSETTINGS_ART",
	timestamps: false 
})
export class ZE_T_PERSSETTINGS_ART extends Model<ZE_T_PERSSETTINGS_ARTAttributes, ZE_T_PERSSETTINGS_ARTAttributes> implements ZE_T_PERSSETTINGS_ARTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_BUCHUNGSART?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

}