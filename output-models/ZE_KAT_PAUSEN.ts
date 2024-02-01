import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_KAT_PAUSENAttributes {
    STRID: string;
    STR_TITEL?: string;
    L_ARTDERBESCHAEFTIGUNG?: number;
    B_SONDERDIENSTVERTRAG?: boolean;
    L_PAUSEINMINUTEN?: number;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    DTINSERT?: Date;
    B_MINDERJAEHRIG?: boolean;
    L_ABARBEITSDAUERINMINUTEN?: number;
    REF_BESCHAEFTIGUNGSART?: number;
}

@Table({
	tableName: "ZE_KAT_PAUSEN",
	timestamps: false 
})
export class ZE_KAT_PAUSEN extends Model<ZE_KAT_PAUSENAttributes, ZE_KAT_PAUSENAttributes> implements ZE_KAT_PAUSENAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ARTDERBESCHAEFTIGUNG?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SONDERDIENSTVERTRAG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_PAUSEINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

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
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_MINDERJAEHRIG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ABARBEITSDAUERINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_BESCHAEFTIGUNGSART?: number;

}