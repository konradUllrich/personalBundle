import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_KAT_BUCHUNGSARTAttributes {
    DTINSERT?: Date;
    STR_KUERZEL?: string;
    STR_HINTERGRUNDFARBE?: string;
    LUSERID?: number;
    STR_SCHRIFTFARBE?: string;
    STR_ANODERABWESENHEIT?: string;
    LUSERIDINSERT?: number;
    B_NURGANZERTAGBUCHBAR?: boolean;
    STRID: string;
    B_BUCHBAR?: boolean;
    STR_REIHENFOLGE?: string;
    STR_BERECHNUNGSALDO?: string;
    STR_BUCHUNGSART?: string;
    DTEDIT?: Date;
    STR_ID?: string;
    B_ERFASSUNGZEITRAUM?: boolean;
    B_KOMPLETTERZEITRAUMBEREICH?: boolean;
    B_DEFAULT?: boolean;
    B_ALSZUSATZZEITNICHTBUCHBAR?: boolean;
    B_PFLICHT?: boolean;
}

@Table({
	tableName: "ZE_KAT_BUCHUNGSART",
	timestamps: false 
})
export class ZE_KAT_BUCHUNGSART extends Model<ZE_KAT_BUCHUNGSARTAttributes, ZE_KAT_BUCHUNGSARTAttributes> implements ZE_KAT_BUCHUNGSARTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_KUERZEL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_HINTERGRUNDFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SCHRIFTFARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ANODERABWESENHEIT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_NURGANZERTAGBUCHBAR?: boolean;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_BUCHBAR?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_REIHENFOLGE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BERECHNUNGSALDO?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BUCHUNGSART?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ERFASSUNGZEITRAUM?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_KOMPLETTERZEITRAUMBEREICH?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DEFAULT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ALSZUSATZZEITNICHTBUCHBAR?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_PFLICHT?: boolean;

}